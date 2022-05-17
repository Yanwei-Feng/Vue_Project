const requestLink = {
  /**
   * 生产环境外网地址
   * 页面
   * http://123.124.91.27:19844
   * 接口
   * http://123.124.91.27:30020
   *
   * 测试环境
   * 页面
   * http://192.168.11.71:19889
   * 接口
   * http://192.168.12.29:30002
   */
  //host
  $onlineBaseUrl: 'http://123.124.91.27:30020',
  $devBaseUrl: 'http://192.168.12.29:30002',
  $url: {
    /****
     * 提供者：孙宇、韩会兵
     *
     * 接口文档地址：http://192.168.11.207:30002/
     *
     */

    /**
     * 登录，登出
     */
    $portUser: '/sys',
    loginLogin: '/login',
    loginLogout: '/login/logout',

    /**
     * 省市区
     */
    getProvince: '/province/list',
    getCity: '/city/list',
    getDistrict: '/district/list',
    getTown: '/town/list',

    /**
     * 信息录入表单
     */
    //农机具检修情况
    machineMaintenance: '/agriMachineMaintenance/save',
    machineMaintenanceCount: '/agriMachineMaintenance/count',
    machineMaintenanceQuery: '/agriMachineMaintenance/selectLastInfo',
    machineMaintenanceReport: '/agriMachineMaintenance/report',

    //   {name:'小麦机种情况',value:'2'},
    wheatMachinePlant: '/wheatMachinePlant/save',
    wheatMachinePlantCount: '/wheatMachinePlant/count',
    wheatMachinePlantQuery: '/wheatMachinePlant/selectLastInfo',
    wheatMachinePlantReport: '/wheatMachinePlant/report',

    //   {name:'小麦机植保情况',value:'3'},
    wheatMachinePlantProtection: '/wheatMachinePlantProtection/save',
    wheatMachinePlantProtectionCount: '/wheatMachinePlantProtection/count',
    wheatMachinePlantProtectionQuery:
      '/wheatMachinePlantProtection/selectLastInfo',
    wheatMachinePlantProtectionReport: '/wheatMachinePlantProtection/report',

    //   {name:'小麦机收情况',value:'4'},
    wheatMachineHarvest: '/wheatMachineHarvest/save',
    wheatMachineHarvestCount: '/wheatMachineHarvest/count',
    wheatMachineHarvestQuery: '/wheatMachineHarvest/selectLastInfo',
    wheatMachineHarvestReport: '/wheatMachineHarvest/report',

    //   {name:'水稻机种情况',value:'5'},
    ricetMachinePlant: '/ricetMachinePlant/save',
    ricetMachinePlantCount: '/ricetMachinePlant/count',
    ricetMachinePlantQuery: '/ricetMachinePlant/selectLastInfo',
    ricetMachinePlantReport: '/ricetMachinePlant/report',

    //   {name:'水稻机植保情况',value:'6'},
    ricetMachinePlantProtection: '/ricetMachinePlantProtection/save',
    ricetMachinePlantProtectionCount: '/ricetMachinePlantProtection/count',
    ricetMachinePlantProtectionQuery:
      '/ricetMachinePlantProtection/selectLastInfo',
    ricetMachinePlantProtectionReport: '/ricetMachinePlantProtection/report',

    //   {name:'水稻机收情况',value:'7'},
    ricetMachineHarvest: '/ricetMachineHarvest/save',
    ricetMachineHarvestCount: '/ricetMachineHarvest/count',
    ricetMachineHarvestQuery: '/ricetMachineHarvest/selectLastInfo',
    ricetMachineHarvestReport: '/ricetMachineHarvest/report',

    //   {name:'大豆玉米带状复合种植情况',value:'8'},
    soybeanCornScpPlant: '/soybeanCornScpPlant/save',
    soybeanCornScpPlantCount: '/soybeanCornScpPlant/count',
    soybeanCornScpPlantQuery: '/soybeanCornScpPlant/selectLastInfo',
    soybeanCornScpPlantReport: '/soybeanCornScpPlant/report',

    //   {name:'大豆玉米带状复合种植机收情况',value:'9'},
    soybeanCornScpHarvest: '/soybeanCornScpHarvest/save',
    soybeanCornScpHarvestCount: '/soybeanCornScpHarvest/count',
    soybeanCornScpHarvestQuery: '/soybeanCornScpHarvest/selectLastInfo',
    soybeanCornScpHarvestReport: '/soybeanCornScpHarvest/report',
  },
};
export default requestLink;
