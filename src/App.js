import { Container, DeleteConfirmModal, Header, TaskList } from "./components";

const App = () => {
    return (
        <div className="h-screen bg-teal-200 flex justify-center items-center">
            <Container>
                <Header />
                <TaskList />
                <DeleteConfirmModal />
            </Container>
        </div>
    );
};

export default App;
