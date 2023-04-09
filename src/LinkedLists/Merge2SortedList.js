/*
    Merge Two Sorted Lists
    Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeLists = function(l1, l2) {
    if(!l1) {
        return l2;
    }

    if(!l2) {
        return l1;
    }
    
    let mergedList = new ListNode();
    let head = mergedList;
    

    while(!l1 && !l2) {
        if(l1.val < l2.val) {
            mergedList = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            mergedList = new ListNode(l2.val);
            l2 = l2.next;
        }
        mergedList = mergedList.next;
    }
    if(!l1){
        mergedList.next = l1;
    }

    if(!l2){
        mergedList.next = l2;
    }
    return head.next;
}