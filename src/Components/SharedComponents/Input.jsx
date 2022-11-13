import { useForm } from "react-hook-form"

const SharedInput = () => {
    const { productos, formState: { errors }, handleSubmit } = useForm()

    return (
        <form>
            <input {...productos("username")} />
        </form>
    )
}

export default SharedInput;
