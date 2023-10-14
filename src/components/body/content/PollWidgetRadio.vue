<template>
    <!-- Widget Start -->
    <div class="widget">
        <div class="widget--title" data-ajax="tab">
            <h2 class="h4">Voting Poll (Radio)</h2>

            <div class="nav">
                <a href="#" class="prev btn-link" data-ajax-action="load_prev_poll_widget">
                    <i class="fa fa-long-arrow-left"></i>
                </a>

                <span class="divider">/</span>

                <a href="#" class="next btn-link" data-ajax-action="load_next_poll_widget">
                    <i class="fa fa-long-arrow-right"></i>
                </a>
            </div>
        </div>

        <!-- Poll Widget Start -->
        <div class="poll--widget" data-ajax-content="outer">
            <ul class="nav" data-ajax-content="inner">
                <li class="title">
                    <h3 class="h4">Do you think the cost of sending money to mobile phone should be reduced?</h3>
                </li>

                <li class="options">
                    <form action="#">
                        <div class="radio">
                            <label>
                                <input type="radio" name="option-1">
                                <span>Yes</span>
                            </label>

                            <p>65%<span style="width: 65%;"></span></p>
                        </div>

                        <div class="radio">
                            <label>
                                <input type="radio" name="option-1">
                                <span>No</span>
                            </label>

                            <p>28%<span style="width: 28%;"></span></p>
                        </div>

                        <div class="radio">
                            <label>
                                <input type="radio" name="option-1">
                                <span>Average</span>
                            </label>

                            <p>07%<span style="width: 07%;"></span></p>
                        </div>

                        <button type="submit" class="btn btn-primary">Vote Now</button>
                    </form>
                </li>
            </ul>

            <!-- Preloader Start -->
            <div class="preloader bg--color-0--b" data-preloader="1">
                <div class="preloader--inner"></div>
            </div>
            <!-- Preloader End -->
        </div>
        <!-- Poll Widget End -->
    </div>
    <!-- Widget End -->
</template>

<script>
export default {
    name: 'PollWidgetRadio'
}
</script>