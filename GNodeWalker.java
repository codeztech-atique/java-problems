// Problem 1

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class GNodeWalker {
    public static void main(String[] args) {
        // Create a sample graph
        GNode nodeA = new GNodeImpl("A");
        GNode nodeB = new GNodeImpl("B");
        GNode nodeC = new GNodeImpl("C");
        GNode nodeD = new GNodeImpl("D");
        GNode nodeE = new GNodeImpl("E");

        nodeA.addChild(nodeB);
        nodeA.addChild(nodeC);
        nodeB.addChild(nodeD);
        nodeC.addChild(nodeD);
        nodeC.addChild(nodeE);

        // Walk the graph and print the result
        ArrayList<GNode> result = walkGraph(nodeA);
        for (GNode node : result) {
            System.out.println(node.getName());
        }
    }

    public static ArrayList<GNode> walkGraph(GNode node) {
        ArrayList<GNode> result = new ArrayList<>();
        Set<GNode> visited = new HashSet<>();

        walkGraphHelper(node, result, visited);

        return result;
    }

    private static void walkGraphHelper(GNode node, ArrayList<GNode> result, Set<GNode> visited) {
        // Add the current node to the result
        result.add(node);
        visited.add(node);

        // Recursively process children
        for (GNode child : node.getChildren()) {
            if (!visited.contains(child)) {
                walkGraphHelper(child, result, visited);
            }
        }
    }
}

interface GNode {
    String getName();
    GNode[] getChildren();
    void addChild(GNode child);
}

class GNodeImpl implements GNode {
    private String name;
    private ArrayList<GNode> children;

    public GNodeImpl(String name) {
        this.name = name;
        this.children = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public GNode[] getChildren() {
        return children.toArray(new GNode[0]);
    }

    public void addChild(GNode child) {
        children.add(child);
    }
}