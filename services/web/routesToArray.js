export default _routesToPathArray;

function _routesToPathArray(routes) {
    return _routesToArray(routes)
        .filter(route => route.path.indexOf(':') < 0)
        .map(route => route.path);
}

function _routesToArray(routes) {
    return routes
        .reduce((output, route) => output.concat([
                route,
            ])
                .concat(_routesToArray(route.routes || [])),
            []);
}