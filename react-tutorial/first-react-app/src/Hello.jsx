function Hello (){

    let name = "John";
    let surname = "dsouza"

    let fullname = () => {
        return name + surname
    }

    return <p>
        Message : Hii , i am your masster {fullname()}
    </p>

}

export default Hello;