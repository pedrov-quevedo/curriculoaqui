package com.pi.curriculoaqui.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CurriculoController {

	@RequestMapping("/index")
	public String formCadCurriculo() {
		return "curriculo/formIndex";
	}
}
