var m_id = new Array('navigation-m_1');
listStart = function allclose() {
  for (i = 0; i < m_id.length; i++) {
    document.getElementById(m_id[i]).style.display = "none";
  }
}
function menuOpen(id) {
  for (i = 0; i < m_id.length; i++) {
    if (id != m_id[i]) {
      document.getElementById(m_id[i]).style.display = "none";
    }
  }
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}
window.onload = listStart;
