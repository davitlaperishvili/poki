
   <?php  
        $section_text = get_sub_field('section_text'); 
        
        $rowIndex = get_row_index();
    ?>
   
    <div class="content" style="overflow: hidden">
      <section class="save-list content-wrapper" id="content<?php echo $rowIndex ?>">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content-pok">
                <?php echo $section_text ?>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

