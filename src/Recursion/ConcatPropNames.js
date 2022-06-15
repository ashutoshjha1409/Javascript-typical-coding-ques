const menus  = [
    {
        name: 'menu-1',
        children: [
            {
                name: 'submenu-1-1',
                children: []
            },
            {
                name: 'submenu-1-2',
                children: [{
                    name: 'supmenu-1-1',
                    children: []
                },
                {
                    name: 'supmenu-1-2',
                    children: []
                }]
            }
        ]
    }, 
    {
        name: 'menu-2',
        children: [
            {
                name: 'submenu-2-1',
                children: [{
                    name: 'supmenu-2-1',
                    children: []
                },
                {
                    name: 'supmenu-2-2',
                    children: []
                }]
            },                
            {
                name: 'submenu-2-2',
                children: []
            }
        ]
    }
];

const concatPropNames = (obj) => {
    let str = '';
    obj.map((item) => {        
        if(item.children) {
           // console.log(item.children)
            str = concatPropNames(item.children) + str;
        }
        str = `${item.name}->` + str;
    });    
    return str;
}


console.log(concatPropNames(menus))