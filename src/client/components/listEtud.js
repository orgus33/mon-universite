componentDidMount() {
    getAll((res)=>console.log(res))
}

getEtudiants= () => {
    getAll((res)=> {
        this.setState({
            Etuds: res.data
        })
    })
}
componentDidMount = () => {
    this.getEtudiants ();
}

addEtud = (name) => {
    let newEtud={
        code: this.state. etuds.length!==0 ?
            (parseInt([...this.state.etuds].pop().code))+1 : 1,
        nom:name
    }
    add(newEtud, ()=> {
        this.getEtudiants ();
    })
}

{this.state. etuds.map((d, index)=>
    <tr key={index} align='left'>
        <td>{d.code}</td> <td>{d.nom}</td>
        <td><button onClick={()=> remove(d._id,
            ()=>this.getEtudiants())}>X</button></td> </tr>)}
