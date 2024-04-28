function printHello(){
    console.log("hello!");
}

function printBye(){
    console.log("bye");
}

export default function Button(){
    return(<div>
        <button onClick ={printHello}>Click Me</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione necessitatibus enim dolorum placeat laboriosam! Nam fugiat ab illum nihil quisquam veniam. Consequatur repudiandae officia deleniti reiciendis quisquam facilis? Modi, aut.</p>
        </div>
        )
}



