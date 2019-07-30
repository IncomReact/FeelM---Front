export default function ( filterData = [], action) {

    var copyfilterData = [...filterData]


    if (action.type == 'mood') {

        copyfilterData.push(action.mood)

        // console.log('========= copy',copyfilterData)

        return copyfilterData;
    }

    else if (action.type == 'with') {
        copyfilterData.push(action.with)

        // console.log('========= copy',copyfilterData)

        return copyfilterData;

    }
    
    else if (action.type == 'type') {
        copyfilterData.push(action.format)

        // console.log('========= copy',copyfilterData)

        return copyfilterData;

    } 

    else {
        return filterData;
    }

    
}