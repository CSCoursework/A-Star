class aStarNode {
  x: number;
  y: number;

  f: number;
  g: number;
  h: number;

  parent: aStarNode;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

let start: aStarNode = new aStarNode(0, 0);
start.f = start.g = start.h = 0;
let end: aStarNode = new aStarNode(7, 7);
end.f = end.g = end.h = 0;

let grid: boolean[][] = [
  [false, false, false, true, false, false, false, false],
  [false, false, false, false, true, false, false, false],
  [false, false, false, false, true, false, false, false],
  [false, false, false, false, true, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

function aStar(grid: boolean[][], start: aStarNode, end: aStarNode) {
  let open: aStarNode[] = [];
  let closed: aStarNode[] = [];

  open.push(start);

  let current: aStarNode;
  let currentIndex: number;
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
    let path: aStarNode[] = [];
    let current_aStarNode = current;

    while (current_aStarNode != null) {
      path.push(current);
      current_aStarNode = current_aStarNode.parent;
    }
    return path.reverse();
  }

  let children: aStarNode[] = [];
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
    let aStarNodeX: number = current.x + newPos[0];
    let aStarNodeY: number = current.y + newPos[1];

    //if not in range
    if (
      aStarNodeX > grid.length - 1 ||
      aStarNodeX < 0 ||
      grid.length - (1)[grid.length - 1] - 1 < aStarNodeY ||
      aStarNodeY < 0
    ) {
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
    child.h = (child.x - end.x) ** 2 + (child.y - end.y) ** 2;
    child.f = child.g + child.h;

    for (let openChild of open) {
      if (child == openChild) {
        continue allChildren;
      }
    }

    open.push(child);
  }
}
