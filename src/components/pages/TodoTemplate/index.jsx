import { PageTitle } from '../../common/atoms/PageTitle'
import { InputForm } from '../../common/atoms/InputForm'
import { DangerButton } from '../TodoTemplate/organisms/DangerButton'
import { TodoListArea } from '../TodoTemplate/organisms/TodoListArea/'

export const TodoTemplate = () => {
    return (
        <div>
            <PageTitle title="TodoList" />
            <DangerButton title="Logout"/>
            <InputForm type="text" placeholder="NewTask" />
            <InputForm type="text" placeholder="SearchKeyword" />
            <TodoListArea />
        </div>
    )
}
