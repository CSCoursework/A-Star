class aStarNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let start = new aStarNode(0, 0);
start.f = start.g = start.h = 0;
let end = new aStarNode(7, 7);
end.f = end.g = end.h = 0;
let grid = [
    [false, false, false, true, false, false, false, false],
    [false, false, false, false, true, false, false, false],
    [false, false, false, false, true, false, false, false],
    [false, false, false, false, true, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
];
function aStar(grid, start, end) {
    let open = [];
    let closed = [];
    open.push(start);
    let current;
    let currentIndex;
    while (open.length > 0) {
        current = open[0];
        currentIndex = 0;
        open.forEach((item, index) => {
            if (open[index].f < current.f) {
                current = item;
                currentIndex = index;
            }
        });
    }
    open.splice(currentIndex, 1);
    closed.push(current);
    if (current.x == end.x && current.y == end.y) {
        let path = [];
        let current_aStarNode = current;
        while (current_aStarNode != null) {
            path.push(current);
            current_aStarNode = current_aStarNode.parent;
        }
        return path.reverse();
    }
    let children = [];
    for (let newPos of [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
    ]) {
        //set child x and y
        let aStarNodeX = current.x + newPos[0];
        let aStarNodeY = current.y + newPos[1];
        //if not in range
        if (aStarNodeX > grid.length - 1 ||
            aStarNodeX < 0 ||
            grid.length - (1)[grid.length - 1] - 1 < aStarNodeY ||
            aStarNodeY < 0) {
            continue;
        }
        //if wall
        if (grid[aStarNodeX][aStarNodeY]) {
            continue;
        }
        children.push(new aStarNode(aStarNodeX, aStarNodeY));
    }
    allChildren: for (let child of children) {
        for (let closedChild of closed) {
            if (child == closedChild) {
                continue allChildren;
            }
        }
        child.g = current.g++;
        child.h = Math.pow((child.x - end.x), 2) + Math.pow((child.y - end.y), 2);
        child.f = child.g + child.h;
        for (let openChild of open) {
            if (child == openChild) {
                continue allChildren;
            }
        }
        open.push(child);
    }
}
//# sourceMappingURL=astar.js.map