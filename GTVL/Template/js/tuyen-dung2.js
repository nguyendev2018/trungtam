$(document).ready(function() {
    // Khi một tab button được nhấp vào
    $('.detail-option').on('click', function() {
        const target = $(this).data('id');
        
        // Xóa lớp active khỏi tất cả các tab button và tab content
        $('.detail-option').removeClass('active');
        $('.card-body').removeClass("active");
  
        // Thêm lớp active vào tab button được nhấp và tab content tương ứng
        $(this).addClass('active');
        $(target).addClass('active');
  
        // Reset "Load More" button khi chuyển tab
        resetLoadMore(target);
    });
  
    // Khi nút "Load More" được nhấp vào
    $(document).on('click', '.load-more', function(e) {
      e.preventDefault();
      const tabContent = $(this).closest('.card-body');     
      loadMoreItems(tabContent);
    });
  
    function loadMoreItems(tabContent) {
        const  items = tabContent.find('.card-item');
        const  visibleItems = items.filter('.show').length;
        const  itemsToShow = items.slice(visibleItems, visibleItems + 7);
  
        // Hiển thị thêm 3 item mới
        itemsToShow.addClass('show');
  
        // Cập nhật thông tin số lượng item đã hiển thị
        //Kiểm tra tổng số Item
        const  totalItems = items.length;
        //Số lượng item đã hiển thị 
        const  itemsShown = tabContent.find('.card-item.show').length;
  
        // Nếu tất cả các item đã được hiển thị, ẩn nút "Load More"
        if (itemsShown >= totalItems) {
            tabContent.find('.load-more').hide();
        }
    }
  
    function resetLoadMore(target) {
        const tabContent = $(target);
        const items = tabContent.find('.card-item');
  
        // Ẩn tất cả các item và chỉ hiển thị 3 item đầu tiên
        items.removeClass('show');
        items.slice(0, 7).addClass('show');
  
        // Nếu có nhiều hơn 3 item, hiện nút "Load More"
        if (items.length > 7) {
            tabContent.find('.load-more').show();
        } else {
            tabContent.find('.load-more').hide();
        }
    }
  
    // Initialize load more cho tab đang hoạt động
    const initialActiveTab = $('.card-body.active');
    resetLoadMore('#' + initialActiveTab.attr('id'));
  });
  