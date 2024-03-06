if(before){
				this.columns.splice(parentIndex, 0, column);
				nextEl.parentNode.insertBefore(colEl, nextEl);
			}else{
				this.columns.splice(parentIndex + 1, 0, column);
				nextEl.parentNode.insertBefore(colEl, nextEl.nextSibling);
			}
		}else{
			if(before){
				this.columns.unshift(column);
				this.headersElement.insertBefore(column.getElement(), this.headersElement.firstChild);
			}else{
				this.columns.push(column);
				this.headersElement.appendChild(column.getElement());
			}
		}

var minHeight = 0;
		
		if(!this.redrawBlock){

			this.headersElement.style.height="";
			
			this.columns.forEach((column) => {
				column.clearVerticalAlign();
			});
			
			this.columns.forEach((column) => {
				var height = column.getHeight();
				
				if(height > minHeight){
					minHeight = height;
				}
