import { Container, Header, TaskList } from "./components";

const App = () => {
    return (
        <div className="h-screen bg-teal-200 flex justify-center items-center">
            <Container>
                <Header />
                <TaskList />
            </Container>
        </div>
    );
};

export default App;
