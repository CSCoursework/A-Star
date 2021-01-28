function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}
class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    successor(parent, open, closed, grid, end) {
        let parentX = parent.x;
        let parentY = parent.y;
        let xy = [
            [parentX--, parentY--],
            [parentX--, parentY],
            [parentX--, parentY++],
            [parentX, parentY--],
            [parentX, parentY++],
            [parentX++, parentY--],
            [parentX++, parentY],
            [parentX++, parentY++],
        ];
        for (let i in xy) {
            let successor = new Node(xy[i][0], xy[i][1]);
            if (closed.includes(successor)) {
            }
            // if (successor.x == end.x && successor.y == end.y) {
            //     //TODO
            //     //  stop search
            //     //  successor.g = q.g + distance between
            //     //  successor and q
            //     //  successor.h = distance from goal to
            //     //  successor
            // }
            // for (let item of open) {
            //     if (successor.x == item.x && successor.y == item.y && item.f < successor.f) {
            //         temp = true
            //         continue
            //     }
            // }
            // for (let item of closed) {
            //     if (successor.x == item.x && successor.y == item.y && item.f < successor.f) {
            //         temp = true
            //         continue
            //     }
            // }
            // if (temp = false){
            //     open.push(new Node(successor.x, successor.y));
            // }
        }
    }
}
function astar(grid, start, end) {
    let open = [start];
    start.f = 0;
    let closed = [];
    while (open.length != 0) {
        let q;
        for (let i in open) {
            if (open[i].f < q.f) {
                q = open[i];
            }
        }
        closed.push(q);
        arrayRemove(open, q);
        if (q.x == end.x && q.y == end.y) {
            let path;
            let done;
            while (!done) {
                path.push(q);
                q = q.parent;
            }
        }
        else {
            q.successor(q, open, closed, grid, end);
        }
    }
}
//# sourceMappingURL=astar.js.map