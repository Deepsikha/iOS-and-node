//
//  ViewController.swift
//  SwipableTableViewCell
//
//  Created by devloper65 on 2/6/17.
//  Copyright © 2017 LaNet. All rights reserved.
//

import UIKit

class ViewController: UIViewController,UIScrollViewDelegate, UITableViewDelegate, UITableViewDataSource {
    var labels = ["a", "b", "c"]
    
    @IBOutlet var table1: UITableView!
    @IBOutlet var Swipe: UITableViewCell!
    var cellIdentifier = "SwipeCell"
    @IBOutlet var lblCell: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
//        self.register(UINib(nibName: "FourthScreenCell", bundle: nil), forCellReuseIdentifier: cellIdentifier)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = table1.dequeueReusableCell(withIdentifier: "SwipeCell", for: indexPath)
        
        cell.textLabel?.text = labels[0]
        
        
        let btnlft1 = UIButton(frame: CGRect(x: 0, y: 0, width: 30, height: 20))
        btnlft1.backgroundColor = .green
        btnlft1.setTitle("Upload", for: .normal)
        btnlft1.addTarget(self, action: #selector(buttonAction), for: .touchUpInside)
        self.view.addSubview(btnlft1)
            
        return cell
      }
    func buttonAction() {
        print("Left")
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labels.count
    }
}

