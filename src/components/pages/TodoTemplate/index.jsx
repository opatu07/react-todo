import { PageTitle } from '../../common/atoms/PageTitle'
import { InputForm } from '../../common/atoms/InputForm'
import { DangerButton } from '../../common/atoms/DangerButton'
import { TodoListArea } from '../TodoTemplate/organisms/TodoListArea/'
import { TodoProvider } from '../../../contexts/TodoContext'

export const TodoTemplate = () => {
    return (
        <TodoProvider>
            <div>
                <PageTitle title="TodoList" />
                <DangerButton title="Logout" />
                <InputForm type="text" placeholder="NewTask" />
                <InputForm type="text" placeholder="SearchKeyword" />
                <TodoListArea />
            </div>
        </TodoProvider>
    )
}
