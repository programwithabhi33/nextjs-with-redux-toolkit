const subAbout = () => {
    return (
        <>
            <div>sub about page</div>
            <Form name="abhishek"/>
        </>
    )
}
export default subAbout

const Form = ({name}) => {
    return (
        <div>Form Page {name}</div>
    )
}