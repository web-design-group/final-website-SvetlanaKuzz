function toggleSpecialty(element) {

		if (element.classList.contains('active')) {
			element.classList.remove('active');
		} else {

			document.querySelectorAll('.specialty-item').forEach(item => {
				item.classList.remove('active');
			});

			element.classList.add('active');
		}
	}