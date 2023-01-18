let print_prime = function () {
    const N = document.getElementById("id_number").value;
    if (isNaN(N)) {
        document.getElementById("id_number").value = null
        alert("Invalid Input!");
        return;
    }
    let list = []
    let ans = [];
    for (let i = 0; i <= N; i++) {
        list.push(false);
    }
}