function createSidebar() {
    const container = document.getElementById("sidebar-container");
    if (!container) return;
  
    container.innerHTML = `
      <div class="sidebar">
        <div class="menu-section">
          <div class="menu-header">
            <i class="ri-briefcase-line icon"></i>
            <span>Job</span>
            <i class="ri-arrow-down-s-line" style="margin-left:auto;"></i>
          </div>
          <ul class="submenu">
            <li class="active"><a href="search.html">List</a></li>
            <li><a href="content.html">Details</a></li>
            <li><a href="new-job.html">Create</a></li>
            <li><a href="edit-section.html">Edit</a></li>
          </ul>
        </div>
      </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", createSidebar);
  