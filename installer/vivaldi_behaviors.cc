// Copyright (c) 2018 Vivaldi Technologies AS. All rights reserved
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/installer/setup/brand_behaviors.h"
#include "installer/util/vivaldi_install_util.h"

namespace installer {

void UpdateInstallStatus(installer::ArchiveType archive_type,
                         installer::InstallStatus install_status) {}

base::string16 GetDistributionData() {
  return base::string16();
}

void DoPostUninstallOperations(const base::Version& version,
                               const base::FilePath& local_data_path,
                               const base::string16& distribution_data) {
  vivaldi::DoPostUninstallOperations(version);
}

}  // namespace installer
