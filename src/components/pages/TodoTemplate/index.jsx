import { PageTitle } from '../../common/atoms/PageTitle'
import { InputForm } from '../../common/atoms/InputForm'
import { TodoListArea } from '../TodoTemplate/organisms/TodoListArea/'
import { TodoProvider } from '../../../contexts/TodoContext'
import styles from './styles.module.css';

export const TodoTemplate = () => {
    return (
        <TodoProvider>
            <div className={styles.container}>
                <PageTitle title="TodoList" />
                <InputForm type="text" placeholder="NewTask" />
                <InputForm type="text" placeholder="SearchKeyword" />
                <TodoListArea />
            </div>
        </TodoProvider>
    )
}
