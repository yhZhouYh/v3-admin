import { defineConfig } from 'yapi-to-typescript'

// https://fjc0k.github.io/yapi-to-typescript/handbook/

export default defineConfig([
  {
    serverUrl: 'https://yapi.shuinfo.tech/',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    comment: {
      extraTags: (ii) => {
        console.log(ii)
        return []
      },
    },
    prodEnvName: 'production',
    outputFilePath: interfaceInfo => `src/api/${interfaceInfo._category.name}.ts`,
    requestFunctionFilePath: 'src/utils/service.ts',
    dataKey: 'data',
    projects: [
      {
        token: '26b4199818cd88e4e1d5ec0cce1facd7ca3b4145fdf974e1a90eb007ed59ebfd',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
    ],
  },
])
