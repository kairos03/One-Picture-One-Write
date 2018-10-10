function delete_check(pk) {
    if (confirm('게시글을 삭제 하시겠습니까?')) {
        window.location.replace("delete")
    } else {
        return false;
    }
}

function delete_fail() {
    alert("인증된 사용자가 아닙니다.")
}