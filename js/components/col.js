// Columns


var createCol = function(obj) {
  var output   = '';

  // create tables with column class for each nested element
  var colElements = function(elements, colSize) {
    var colHTML = '';

    $.each(elements, function(i, el) {
      // get included tags
      var contents = $(el)[0].outerHTML;
      var colClass = 'columns ';

      // transclude any class that might have been added onto element
      if ($(el).attr('class')) {
        colClass += $(el).attr('class');
      };

      // construct column class for each element
      colHTML += '<table class="' + colClass + ' ' + colSize+'">'
              +'<tr><td>'
              + contents +'</td><td class="expander"></td></tr></table>';
    });

    return colHTML;
  };

  // create tables with wrapper class for each column
  $.each(obj, function(k,v) {
    var wrapperHTML = '';
    var colSize     = '';
    var col         = $(this);
    var elements    = $(this).children();

    // if wrapper is last or the only one, put last class
    if (k === obj.length - 1) {
      wrapperHTML += '<td class="wrapper last">';
    } else {
      wrapperHTML += '<td class="wrapper">';
    }

    // check for sizes
    if (col.attr('small')) {
      colSize += 'small' + '-' + col.attr('small') + ' ';
    }
    if (col.attr('large')) {
      colSize += 'large' + '-' + col.attr('large') + ' ';
    }

    wrapperHTML += colElements(elements, colSize);
    wrapperHTML += '</td>';

    output += wrapperHTML;
  });

  return output;
};
