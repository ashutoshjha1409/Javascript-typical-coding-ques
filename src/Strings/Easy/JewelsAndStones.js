/*
    Given a J as jewels and S as Stones find the no of jewels in stones. character senstive, each case represnts a different jewel.
    Input j = 'aA', S = 'aAABBBB'
    Output 3

    Input j = 'z', s = 'ZZ'

*/

const jewelAndStones  = (jewels, stones) => {
    const jewelsMap = {};

    for (let i = 0; i < jewels.length; i++) {
        if(!jewelsMap[jewels[i]]) jewelsMap[jewels[i]] = 0;
    }

    for (let i = 0; i < stones.length; i++) {
        if(jewelsMap[stones[i]] !== undefined) jewelsMap[stones[i]] = jewelsMap[stones[i]] + 1;
    }

    let res = Object.values(jewelsMap).reduce((total, current) => total + current, 0);
    console.log(res);
    
}

jewelAndStones('aA', 'aAABBBB');
jewelAndStones('z', 'ZZ');
