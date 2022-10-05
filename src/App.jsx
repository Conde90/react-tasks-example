import TaskList from './components/TasksList';
import TaskForm from './components/TaskForm';

function App() {

   return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto bg-yellow-400 p-10'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
      );
}

export default App