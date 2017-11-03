export default detailData = {
    basicInfo: {
        name: '蒙牛乳业（北京）有限责任公司',
        address: '北京市通州区食品工业园区一区1号',
        telephone: '18601395252',
        population: '30',
        buildingHeight: '15',
        plies: '4',
        buildingStructure: '混凝土彩钢板',
        area: '113333.9',
        buildingArea: '50000',
        functional: '生产',
        neighbors: {
            east: '村庄',
            south: '马路',
            west: '村庄',
            north: '出庄'
        },
        squadron: {
            path: '玉桥中路 -> 临河里路 -> 京津公路 -> 武兴路 -> 潞城中路',
            time: '45分钟'
        }
    },

    fireFightingDevice: {
        fireControlRoomLocation: null,
        water: {
            firePool: {
                number: null,
                location: null,
                capacity: null,
                supplyWay: null,
            },
            outdoorSource: {
                description: null,
                location: null
            }
        },
        automaticAlertSystem: true,
        automaticSprinklerSystem: true,
        emergencyBroadcastSystem: true,
        smokePreventionSystem: true,
        outdoorFireHydrant: {
            Number: '5',
            location: null
        },
        firePump: {
            fireHydrantPump: {
                number: null,
                lift: null,
                flowRate: null,
                waterPumpAdapter: {
                    number: null,
                    location: null
                }
            },
            sprayPump: {
                number: null,
                range: null,
                flowRate: null,
                waterPumpAdapter: {
                    number: null,
                    location: null
                }
            }
        },
        fireElevator: {
            Number: null,
            location: null
        },
        evacuationStair: {
            Number: 2,
            location: null
        },
        fireExit: {
            Number: 1,
            location: null
        },
        indoorFireHydrant: {
            Number: '4',
            location: null
        },
    },

    keyPosition: [
        {
            name: '生产车间',
            location: '单位内部',
            buildingStructure: '砖混',
            usage: '生产',
            risk: '易燃性'
        }
    ],

    keyPoint: '人员密集场所发生火灾立即组织疏散人员'
};