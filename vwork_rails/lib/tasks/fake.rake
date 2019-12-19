namespace :fake do
  desc 'TODO'
  task createjob: :environment do
    Job.create_fake!
  end

  desc 'TODO'
  task createjobsd: :environment do
    loop do
      sleep Random.rand(60)
      Job.create_fake!
    end
  end
end
