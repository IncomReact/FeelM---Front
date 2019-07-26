export default function ( filterData = [], action) {

    var copyfilterData = [...filterData]
<<<<<<< HEAD
=======
    // console.log('Redux ==========',action)
>>>>>>> 91c61cf51b67a33fc766f88c27670ca6c725cb17

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

        console.log('========= copy',copyfilterData)

        return copyfilterData;

    } 

    else {
        return filterData;
    }

    
}