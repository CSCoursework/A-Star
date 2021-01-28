
const arrayRemove = (arr, value) =>
    arr.filter(function (ele) {
    return ele != value;
});
const heuristic = (node: Node, end: Node) =>
    Math.sqrt(Math.abs((end.x - node.x) ^ 2 + (end.x - node.y) ^ 2));


class Node {
    x: number;
    y: number;

    f: number;
    g: number;
    h: number;

    parent: Node;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    successor(parent: Node, open: Node[], closed: Node[], grid: boolean[][], end: Node, current: Node) {
        let parentX = parent.x
        let parentY = parent.y
        let xy = [
            [parentX--, parentY--], //SW
            [parentX--, parentY], //W
            [parentX--, parentY++], //NW
            [parentX, parentY--], //S
            [parentX, parentY++], //N
            [parentX++, parentY--], //SE
            [parentX++, parentY], //E
            [parentX++, parentY++], //NE
        ];

        for (let i in xy) {
            let successor = new Node(xy[i][0], xy[i][1])

            if (closed.includes(successor)){
                continue;
            }
            successor.g = current.g + heuristic(successor, current);
            successor.h = heuristic(successor, end)
            successor.f = successor.g + successor.h;

            let temp = false;
            for (let item of open) {
                if (successor.x == item.x && successor.y == item.y && item.g < successor.g) {
                    temp = true;
                }
            }
            if(temp){
                continue;
            }

            open.push(successor);
        }
    }
}


function astar(grid: boolean[][], start: Node, end: Node) {
    let open: Node[] = [start];
    start.f = 0;
    let closed: Node[] = []

    while (open.length != 0) {
        let q: Node;
        q.f = Infinity;
        for (let i in open) {
            if (open[i].f < q.f) {
                q = open[i];
            }
        }
        closed.push(q)
        arrayRemove(open, q)

        if (q.x == end.x && q.y == end.y){
            let path : Node[];
            let done : boolean;
            while(!done){
                path.push(q);
                if (q.parent == null){
                    done = true;
                } else {
                    q = q.parent;
                }

            }
        }
        else{
            q.successor(q,open,closed,grid,end, q)
        }
    }
}
