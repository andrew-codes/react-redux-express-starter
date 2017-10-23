import Home from './components/Home';
import About from './components/About';

export default [
    {
        exact: true,
        path: '/',
        component: Home,
        loadData: () => Promise.resolve({
            data: true,
        }),
    },
    {
        path: '/about',
        component: About,
        loadData: () => Promise.resolve({
            test: {
                test: true,
            },
        }),
    },
]