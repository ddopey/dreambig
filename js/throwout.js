[["HCOOH", "CH<sub>4</sub>"], ["C", "N"], ["СН<sub>3</sub>Cl", "HCl"], 20, ["Изопрен", "Метан", "Этилен"]];

 function show_chem_result() {
 	//count question 1
 	let temp_arr = [],
 			coincidence = 0;
 	Array.from(document.getElementById("chem1").querySelectorAll(".digits-chosen")).forEach(el => {
 		temp_arr.push(el.innerHTML);
 	});
 	chemistry.correct_answers[0].forEach((el,index) => {
 		if (el == temp_arr[index]) {
 			coincidence += 1;
 		}
 	});
 	if (coincidence == 2) {
 		chemistry.score += 1;
 	}
 	// count question 2
 	temp_arr = [];
 	coincidence = 0;

 	 	Array.from(document.getElementById("chem2").querySelectorAll(".digits-chosen")).forEach(el => {
 		temp_arr.push(el.innerText);
 	});

 	chemistry.correct_answers[1].forEach((el,index) => {
		if (el == temp_arr[index]) {
			coincidence += 1;
		}
	});

	if (coincidence == 2) {
 		chemistry.score += 1;
 	}

 	//count question 3
 			temp_arr = [];
 			coincidence = 0;
 	Array.from(document.getElementById("chem3").querySelectorAll(".digits-chosen")).forEach(el => {
 		temp_arr.push(el.innerHTML);
 	});
 	chemistry.correct_answers[2].forEach((el,index) => {
 		if (el == temp_arr[index]) {
 			coincidence += 1;
 		}
 	});
 	if (coincidence == 2) {
 		chemistry.score += 1;
 	}

 	//count question 4
 	if(chemistry.correct_answersp[3] == document.getElementById("cheminput").value) {
 		chemistry.score += 1;
 	}

 	//count question 5
 	temp_arr = [];
	coincidence = 0;

 	 Array.from(document.getElementById("chem5").querySelectorAll(".digits-chosen")).forEach(elem => {
 		temp_arr.push(elem.innerText);
 		});

	 	chemistry.correct_answers[4].forEach((el,index) => {
			if (el == temp_arr[index]) {
				coincidence += 1;
			}
		});

		if (coincidence == 2) {
	 		chemistry.score += 1;
	 	}


 }