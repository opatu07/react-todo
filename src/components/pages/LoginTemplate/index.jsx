import { PageTitle } from '../../common/atoms/PageTitle'
import { InputForm } from '../../common/atoms/InputForm'
import { ActionButton } from '../../common/atoms/ActionButton'

export const LoginTemplate = () => {
    return (
        <div>
            <PageTitle title="Login" />
            <ActionButton title="SignUp" />
            <InputForm type="text" placeholder="Email" />
            <InputForm type="text" placeholder="Password" />
            <ActionButton title="Login"/>
        </div>
    )
}
