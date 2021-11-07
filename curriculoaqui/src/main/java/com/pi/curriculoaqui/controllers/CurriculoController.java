package com.pi.curriculoaqui.controllers;

import com.pi.curriculoaqui.models.Curriculo;
import com.pi.curriculoaqui.repository.CurriculoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CurriculoController {

	@Autowired
	private CurriculoRepository cr;

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String formCadCurriculo() {
		return "formIndex";
	}

	@RequestMapping(value = "/index", method = RequestMethod.POST)
	public String formCadCurriculo(Curriculo curriculo) {
		cr.save(curriculo);
		return "redirect:/index";
	}
}
