//
//  SchemeTestViewController.swift
//  RNDemo
//
//  Created by 惠蒲葵 on 2025/2/22.
//

import UIKit

class SchemeTestViewController: UIViewController {
  var name: String?
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    view.backgroundColor = .white
    
    let label = UILabel()
    label.frame = CGRect(x: 20, y: 100, width: 300, height: 50)
    label.textColor = .black
    label.text = "姓名: \(name ?? "Unknown")"
    view.addSubview(label)
  }
}
