import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function fileIcon(params) {
  let iconClass = "fa fa-file-o";

  if(new RegExp("image/*").test(params)) {
    iconClass = "fa fa-file-image-o";
  } else if(new RegExp("text/*").test(params)) {
    iconClass = "fa fa-file-text-o";
  } else if(new RegExp("application/pdf").test(params)) {
    iconClass = "fa fa-file-pdf-o";
  }

  return new  htmlSafe(`<i class="${iconClass}"></i>`);
}

export default helper(fileIcon);
