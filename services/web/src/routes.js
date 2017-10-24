import About from './components/About';
import Home from './components/Home';
import Topic from './components/Topic';
import Topics from './components/Topics';

export default [
    {
        exact: true,
        path: '/',
        component: Home,
        loadData: () => Promise.resolve({
            home: true,
        }),
    },
    {
        path: '/about',
        component: About,
        loadData: () => Promise.resolve({
            test: {
                about: true,
            },
        }),
    },
    {
        path: '/topics',
        component: Topics,
        loadData: () => Promise.resolve({
            test: {
                topic: true,
            },
        }),
        routes: [
            {
                path: '/topics/:topicId',
                component: Topic,
            }
        ]
    },
]