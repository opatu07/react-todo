import { PageTitle } from '../../common/atoms/PageTitle'
import { InputForm } from '../../common/atoms/InputForm'
import { TodoListArea } from '../TodoTemplate/organisms/TodoListArea/'
import { TodoProvider } from '../../../contexts/TodoContext'

export const TodoTemplate = () => {
    return (
        <TodoProvider>
            <div>
                <PageTitle title="TodoList" />
                <InputForm type="text" placeholder="NewTask" />
                <InputForm type="text" placeholder="SearchKeyword" />
                <TodoListArea />
            </div>
        </TodoProvider>
    )
}
