//
//  MyCustomCell.swift
//  demo123
//
//  Created by devloper65 on 1/31/17.
//  Copyright © 2017 LaNet. All rights reserved.
//

import UIKit

class MyCustomCell: UITableViewCell {

    @IBOutlet var myView: UIView!
    @IBOutlet var lbl: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
