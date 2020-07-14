function height1(tree) {
  return (
    Math.max(
      tree.left && height1(tree.left),
      tree.right && height1(tree.right)
    ) + 1
  );
}
function bst(tree, minimum, maximum) {
  if (minimum !== undefined && tree.key < minimum) return false;
  if (maximum !== undefined && tree.key > maximum) return false;
  if (tree.left && !bst(tree.left, minimum, tree.key)) return false;
  if (tree.right && !bst(tree.right, tree.key, maximum)) return false;
  return true;
}

function main() {
  let Min = Number.MIN_VALUE;
  let Max = Number.MAX_VALUE;
  bst(tree, Min, Max);
}

function largest(tree, state) {
  if (tree.right) {
    largest(tree.right, state);
    if (state.result) return;
  }
  if (!--state.n) {
    state.result = tree.key;
    return;
  }
  if (tree.left) largest(tree.left, state);
}

function thirdLargest(tree) {
  if (tree.key == null) return null;
  let state = { n: 3, result: null };
  largest(tree, state);
  return state.result;
}

function isBalanced(tree) {
  if (!tree.left) {
    return !(tree.right && (tree.right.left || tree.right.right));
  }
  if (!tree.right) {
    return !(tree.left && (tree.left.left || tree.left.right));
  }
  return isBalanced(tree.left) && isBalanced(tree.right);
}
