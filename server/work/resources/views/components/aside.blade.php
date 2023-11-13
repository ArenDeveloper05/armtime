<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/" class="brand-link text-decoration-none">
        <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">Admin Panel</span>
    </a>
    <div class="sidebar">
        @if(auth()->check())
            <div class="user-panel mt-3 pb-3 mb-3 d-flex ">
                <div class="image">
                    <img src="/admin/dist/img/time_shop.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    @include('components.login')
                </div>
            </div>
        @else
            <div class="info">
                @include('components.login')
            </div>
        @endif
    </div>
</aside>
