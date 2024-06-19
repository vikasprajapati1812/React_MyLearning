const container=React.createElement('div',{className:'container',id:'container'} ,
React.createElement('section',{ } ,[
    React.createElement('img',{style:{width:200},key:1,src:"./Reactimage.webp"} ),
    React.createElement('form',{id:'formdata' ,key:2},[
        React.createElement('label',{htmlFor:'user' ,key:21},"Username"),
        React.createElement('input',{id:'user',type:'text',key:22}),
        React.createElement('label',{htmlFor:'password' ,key:23},"Password"),
        React.createElement('input',{id:'password',type:'password' ,key:24}),

    ])
]

))



// const h2=<h2>Hello JSX and Babel</h2>

// console.log(h2)


const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(container)