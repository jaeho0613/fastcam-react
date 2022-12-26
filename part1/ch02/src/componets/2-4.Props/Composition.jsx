function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

export default function Composition() {
    return <div>
        <Welcome name={"Jimm1"}/>
        <Welcome name={"Jimm2"}/>
        <Welcome name={"Jimm3"}/>
        <Welcome name={"Jimm4"}/>
    </div>
}