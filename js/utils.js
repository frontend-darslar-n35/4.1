function filterRegions(regionsArr){
    let tempRegionsArr = []

    regionsArr.forEach((value, index) => {
        tempRegionsArr.push({id:value.id, name:value.name_uz})
    })
    return tempRegionsArr
}


function findDistricts(id, districtsArr){
    
    let founded = []
    districtsArr.forEach(value=>value.region_id == id ? founded.push(value):'')
    return founded
}

function findQuarters(id, quartersArr){
    let founded = []
    quartersArr.forEach(value=>value.district_id == id ? founded.push(value):'')
    return founded
}

function filterDistricts(regionsArr){
    let tempDistrictsArr = []

    regionsArr.forEach((value, index) => {
        tempDistrictsArr.push({id:value.id, name:value.name_uz, region_id:value.region_id})
    })
    return tempDistrictsArr
}

function filterQuarters(quartersArr){
    let tempQuartersArr = []

    quartersArr.forEach((value, index) => {
        tempQuartersArr.push({id:value.id, name:value.name_uz, district_id:value.district_id})
    })
    return tempQuartersArr
}